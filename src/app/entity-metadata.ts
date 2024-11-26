import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Post } from './models/post.model';

const entityMetadata: EntityMetadataMap = {
  //Should start with caps and should be singular
  Post: {
    selectId: (post: Post) => post.id!,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
