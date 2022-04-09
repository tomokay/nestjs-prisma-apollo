import { PrismaClient } from '@prisma/client';
import { DeleteSpaInput } from 'src/spa/spa.model';

const prisma = new PrismaClient();

export const deleteSpaData = (deleteSpaId: DeleteSpaInput) => {
  return prisma.spa.delete({
    where: { id: Number(deleteSpaId) },
  });
};
