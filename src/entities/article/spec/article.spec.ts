import { Article } from "../article";
import { mockCommentsData, Comment } from "@/entities/comment";
import { mockArticlesData } from "./article.mock";

const mockArticle = mockArticlesData()[0];

describe(">>> Article", () => {
  describe(">> constructor", () => {
    it("should instantiate id only if it was provided", () => {
      const entity1 = new Article({
        ...mockArticle,
        id: 1,
      });

      expect(entity1.id).toBe(1);

      const entity2 = new Article({
        ...mockArticle,
        id: undefined,
      });

      expect(entity2.id).toBeUndefined();
    });

    it("should instantiate createdAt only if it was provided", () => {
      const entity1 = new Article({
        ...mockArticle,
        createdAt: "2019-12-19T11:54:04 +05:00",
      });

      expect(entity1.createdAt).toBe("2019-12-19T11:54:04 +05:00");

      const entity2 = new Article({
        ...mockArticle,
        createdAt: undefined,
      });

      expect(entity2.createdAt).toBeUndefined();
    });

    it("should instantiate Comments", () => {
      const entity1 = new Article({
        ...mockArticle,
        comments: mockCommentsData(),
      });

      expect(entity1.comments[0] instanceof Comment).toBeTruthy();
    });
  });
});
