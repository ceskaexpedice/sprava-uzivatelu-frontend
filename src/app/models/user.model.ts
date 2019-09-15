
export class User {

  public uid: string;
  public provider: string;
  public email: string;
  public name: string;
  public roles: string[];
  public image: string;
  public createdAt: Date;

  constructor() {
    this.roles = [];
  }

  static fromJson(json): User {
    const user = new User();
    user.uid = json.uid;
    user.email = json.email;
    user.name = json.name;
    user.provider = json.provider;
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



}
