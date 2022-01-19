export interface ModuleStateInterface {
  text: string;
}

function state(): ModuleStateInterface {
  return {
    text: 'Hello World!!!',
  };
}

export default state;
