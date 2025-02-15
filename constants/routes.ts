const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `profile/${id}`,
  TAGS: (id: string) => `tags/${id}`,
  ASK_QUESTIONS: "ask-questions",
};

export default ROUTES;
