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
  }


/**
* Promote the character to the next rank.
* @returns {string} The new rank after promotion.
*/
  promote() {
    const ranks = ["Mizunoto", "Mizunoe", "Kanoe", "Kanooto", "Hashira"];
    const currentIndex = ranks.indexOf(this.rank);
    if (currentIndex < ranks.length - 1) {
      this.rank = ranks[currentIndex + 1];
    }
    return this.rank;
  }
}

module.exports = Character;
