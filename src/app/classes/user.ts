export class User {

  public name: string;

  public img?: string;

  constructor(

    name: string,

    img: string = 'https://vectorified.com/images/no-profile-picture-icon-6.png',

  ) {

    this.name = name;

    this.img = img;

  }

}
