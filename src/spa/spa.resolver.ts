import { PrismaService } from '../prisma.service';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  AddSpaInput,
  DeleteSpaInput,
  Spa,
  SpaList,
  SpaModel,
  UpdateSpaInput,
} from 'src/spa/spa.model';
import { ParseIntPipe } from '@nestjs/common';
import { validateQuerySpa } from 'src/lib/queryValidation';
import { createSpaInput } from 'src/lib/prisma/createSpaInput';
import { updateSpaInput } from 'src/lib/prisma/updateSpaInput';
import { deleteSpaData } from 'src/lib/prisma/deleteSpaData';

@Resolver(() => Spa)
export class SpaResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [SpaList])
  async spaList() {
    return await this.prisma.spa.findMany();
  }

  @Query((returns) => SpaModel)
  async spa(
    @Args({ name: 'spaId', type: () => ID }, ParseIntPipe)
    id: number,
  ) {
    validateQuerySpa(id);
    return await this.prisma.spa.findUnique({
      where: { id: Number(id) },
    });
  }

  @Mutation((returns) => Spa)
  async createSpa(
    @Args({ name: 'input', type: () => AddSpaInput })
    input: AddSpaInput,
  ) {
    return await createSpaInput(input);
  }

  @Mutation((returns) => Spa)
  async updateSpa(
    @Args({ name: 'update', type: () => UpdateSpaInput })
    update: UpdateSpaInput,
  ) {
    return await updateSpaInput(update);
  }

  @Mutation((returns) => Spa)
  async deleteSpa(
    @Args({ name: 'deleteSpaId', type: () => ID })
    deleteSpaId: DeleteSpaInput,
  ) {
    return await deleteSpaData(deleteSpaId);
  }
}
