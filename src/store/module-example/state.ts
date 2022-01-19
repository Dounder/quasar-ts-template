export interface ModuleStateInterface {
  prop: boolean;
}

function state(): ModuleStateInterface {
  return {
    prop: false
  }
};

export default state;
