/// <reference types="cypress" />
describe('第一个用例', () => {
    it('测试 Module API', () => {
      expect(1).to.equal(1)
    })
  
    it('[smoke]测试 Module API', () => {
      expect(2).to.equal(2)
    })
  })