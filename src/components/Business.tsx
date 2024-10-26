



class Business {
    image: string = '';
    name: string = '';
    address: string = '';
    city: string = '';
    state: string = '';
    zipcode: string = '';
    category: string = '';
    rating: number = 0;
    reviewCount: number = 0;

    constructor(initialize?: any){
        if (!initialize) return;
    if (initialize.name) this.name = initialize.name;
    if (initialize.address) this.address = initialize.address;
    if (initialize.image) this.image = initialize.image;
    if (initialize.city)
      this.city = initialize.city;
    if (initialize.state)
      this.state = initialize.state;
    if (initialize.zipcode) this.zipcode = initialize.zipcode;
    if (initialize.category) this.category = initialize.category;
    if (initialize.rating) this.rating = initialize.rating;
    if (initialize.reviewCount) this.reviewCount = initialize.reviewCount;
  }
    }


export default Business;