

export type dataType = {
    id: number,
    title: string,
    desc: string,
    price: number,
    
    // Size: number,
    // stock:number
  }

  interface CartItem extends dataType {
    quantity: number;
  }