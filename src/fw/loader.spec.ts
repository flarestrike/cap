import { FwCore, FwLoader as Target } from './loader';

describe(Target.name, () => {
  let target: Target;
  beforeEach(() => {
    target = new Target(new FwCore(), {});
  });
  it('should set debug to false', () => {
    expect(target.debug).toBe(false);
  });
});
