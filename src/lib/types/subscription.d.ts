declare type Subscription = {
  subscription: {
    _id: string;
    email: string;
    active: boolean;
    subscribedAt: string;
    createdAt: string;
    updatedAt: string;
    unsubscribedAt: string | null;
  };
};
