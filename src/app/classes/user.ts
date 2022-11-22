export class User {

  public name: string;

  public img?: string;

  public id?: string;

  constructor(

    name: string,

    img: string = 'https://vectorified.com/images/no-profile-picture-icon-6.png',

    id: string,

  ) {

    this.name = name;

    this.img = img;

    this.id = id;

  }

}
