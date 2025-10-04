export class Workout {
  constructor(id, user_id, date, notes, created_at) {
    this.id = id;
    this.user_id = user_id;
    this.date = date;
    this.notes = notes;
    this.created_at = created_at;
  }
}
