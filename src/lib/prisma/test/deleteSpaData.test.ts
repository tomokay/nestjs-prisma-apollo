import { deleteSpaData } from 'src/lib/prisma/deleteSpaData';

const mockFunction = jest.fn(
  deleteSpaData as jest.MockedFunction<typeof deleteSpaData>,
);

test('delete ID', () => {
  expect(mockFunction.mock.results[2]);
});
