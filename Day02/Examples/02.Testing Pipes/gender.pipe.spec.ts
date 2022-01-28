import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {

  let pipe:GenderPipe;

  beforeEach(() => {
      pipe = new  GenderPipe();
  });

  //1. Create an instance of the pipe
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  //2. Testing transform method
  it('should return "Male" when input is "m" or "M" ', () => {
    const result1:string  = pipe.transform("m");
    const result2:string  = pipe.transform("M");
    expect(result1).toEqual("Male");
    expect(result2).toEqual("Male");
  });


  //3. Testing transform method
  it('should return "Female" when input is "f" or "F" ', () => {
    const result1:string  = pipe.transform("f");
    const result2:string  = pipe.transform("F");
    expect(result1).toEqual("Female");
    expect(result2).toEqual("Female");
  });

  //4. Testing transform method
  it('should return empty when input is invalid gender', () => {
    const result:string  = pipe.transform("hello");
    expect(result).toEqual("");
  });

});
