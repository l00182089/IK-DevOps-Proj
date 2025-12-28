const logger = require("./logger");
/**
 * Represents a Demon Slayer character with a name and rank.
 * @class
 */
class Character {



/**
* Create a character.
* @param {string} name - The character's name.
* @param {string} rank - The character's starting rank.
*/
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;

    // Logging creation event
    logger.info(`Character created: Name="${this.name}", Rank="${this.rank}"`);
  }


/**
* Promote the character to the next rank.
* @returns {string} The new rank after promotion.
*/
  promote() {
    const ranks = ["Mizunoto", "Mizunoe", "Kanoe", "Kanooto", "Hashira"];
    const currentIndex = ranks.indexOf(this.rank);

    logger.debug(`Attempting promotion for "${this.name}" at rank "${this.rank}"`);
    
    if (currentIndex < ranks.length - 1) {
      this.rank = ranks[currentIndex + 1];

      logger.info(` Promotion successful: "${this.name}" is now rank "${this.rank}"`);
    } else 
      logger.warn(`Promotion failed: "${this.name}" is already at the highest rank "${this.rank}"`);
      
    }
    return this.rank;
  }
}

module.exports = Character;
