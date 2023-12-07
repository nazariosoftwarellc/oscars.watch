export type DTDDMediaItemStats = {
  item: DTDDMediaItem;
  topicItemStats: DTDDTopicItemStat[];
};

export type DTDDMediaItem = {
  id: number;
  name: string;
  cleanName: string;
  genre: string;
  releaseYear: string;
  legacyId: number;
  legacyUserId: number;
  legacyItemType: string;
  art: string;
  umId: null;
  tmdbId: number;
  tmdbResult: null;
  backgroundImage: string;
  posterImage: string;
  overview: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  ItemTypeId: number;
  itemType: DTDDItemType;
};

export type DTDDItemType = {
  id: number;
  name: string;
  picture: string;
  slug: string;
  verb: string;
  pastTenseVerb: string;
  createdAt: Date;
  updatedAt: Date;
};

export type DTDDTopicItemStat = {
  topicItemId: number;
  newsletterDate: null;
  yesSum: number;
  noSum: number;
  numComments: number;
  TopicId: number;
  ItemId: number;
  RatingId: number;
  commentUserIds: string;
  voteSum: number;
  comment: string;
  isAnonymous: number;
  username: string;
  UserId: number;
  verified: number;
  itemName: string;
  itemCleanName: string;
  releaseYear: string;
  itemTypeName: string;
  itemTypeSlug: string;
  itemTypeId: number;
  isYes: number;
  hasUserComment: boolean;
  itemId: null;
  comments: DTDDComment[];
  topic: DTDDTopic;
};

export type DTDDComment = {
  id: number;
  voteSum: number;
  comment: string;
  User: {
    id: number;
    displayName: string;
  };
};

export type DTDDTopic = {
  id: number;
  name: string;
  notName: string;
  keywords: null;
  description: null;
  subtitle: null;
  subtitleText: null;
  subtitleUrl: null;
  doesName: string;
  listName: string;
  image: string;
  ordering: number;
  isSpoiler: boolean;
  isVisible: boolean;
  isSensitive: boolean;
  smmwDescription: string;
  legacyId: number;
  createdAt: Date;
  updatedAt: Date;
};
