class Character {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

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
