
export class User {

  public id: number;
  public uid: string;
  public provider: string;
  public email: string;
  public name: string;
  public roles: string[];
  public image: string;
  public createdAt: Date;
  public favourites: number;

  constructor() {
    this.roles = [];
  }

  static fromJson(json): User {
    const user = new User();
    user.id = json.id;
    user.uid = json.uid;
    user.email = json.email;
    user.image = json.image;
    user.name = json.name;
    user.provider = json.provider;
    user.favourites = json.favourites_count;
    if (json.roles) {
      user.roles = json.roles.split(',');
    }
    if (json.created_at) {
      user.createdAt = new Date(json.created_at);
    }
    return user;
  }

  static fromJsonArray(json): User[] {
    const users = [];
    for (const obj of json) {
      users.push(User.fromJson(obj));
    }
    return users;
  }

  hasRole(role: string): boolean {
    return this.roles.indexOf(role) >= 0;
  }

  isAdmin(): boolean {
    return this.hasRole('admin');
  }

  checkRole(role: string): boolean {
    return this.isAdmin() || this.hasRole(role);
  }

  getTextProfileImage(): string {
    if (!this.name) {
        return '?';
    }
    return this.name[0];
}


}
