import { Tetronomo } from './model';

describe('teronomo', () => {
  let tetro: Tetronomo;
  beforeEach(() => {
    tetro = new Tetronomo();
  });
  describe('postion', () => {
    it('starts with 0', () => {
      expect(tetro.position).toBe('0');
    });
    it('will be R if rotated right', () => {
      tetro.rotateRight();
      expect(tetro.position).toBe('R');
    });
    it('will be 2 if rotated right twice', () => {
      tetro.rotateRight();
      tetro.rotateRight();
      expect(tetro.position).toBe('2');
    });
    it('will be L if rotated right thrice', () => {
      tetro.rotateRight();
      tetro.rotateRight();
      tetro.rotateRight();
      expect(tetro.position).toBe('L');
    });
    it('will be 0 if rotated right four times', () => {
      tetro.rotateRight();
      tetro.rotateRight();
      tetro.rotateRight();
      tetro.rotateRight();
      expect(tetro.position).toBe('0');
    });
    it('will be L if rotated right left', () => {
      tetro.rotateLeft();
      expect(tetro.position).toBe('L');
    });
    it('if a prev positon is provided it will rotate from that postion', () => {
      tetro.rotateRight('2');
      expect(tetro.position).toBe('L');
    });
  });
});
