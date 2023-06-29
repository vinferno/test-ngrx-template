import * as fromDocument from './document.actions';

describe('addDocumentDocuments', () => {
  it('should return an action', () => {
    expect(fromDocument.addDocumentDocuments().type).toBe('[Document] AddDocument Documents');
  });
});
