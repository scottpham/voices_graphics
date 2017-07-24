
const Chart = {
  create(opts){
    const instance = Object.create(this);
    // loop over options passed in and attach them to instances 
    Object.keys(opts).forEach( function(key){
      // instance property equals value of the option
      instance[key] = opts[key]; 
    });

    return instance;

  },
  parameters(){},
  message: "What it is",
  draw(){
    this.parameters();
    console.log(this.message);
  }
}


export { Chart };
