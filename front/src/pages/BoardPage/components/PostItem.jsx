import { useNavigate } from "react-router-dom";
import { formalizeDate } from "../../../module/module";

const defaultCategory = "카테고리";
const defaultPostImages = [
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
];

export const PostItem = ({ post, index }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/posts/${post.id}`);
    }

    function getPostImage(post, index) {
        if (post.file) {
            return post.file;
        }
        return defaultPostImages[index % defaultPostImages.length];
    }

    return (
        <article className="post-card" onClick={handleClick} post={post}>
            <div
                className="post-card-image"
                style={{
                    backgroundImage: `url("${getPostImage(post, index)}")`,
                }}
            />

            <div className="post-card-main">
                <h3 className="post-card-title">
                    {post.title || "제목 없는 기록"}
                </h3>

                <div className="post-card-meta">
                    <span className="post-card-category">
                        {post.category || defaultCategory}
                    </span>

                    <div className="post-card-stats">
                        <span>좋아요 {post.likes || 0}</span>
                        <span>댓글 {post.commentCount || 0}</span>
                        <span>조회수 {post.views || 0}</span>
                    </div>

                    <span className="post-card-date">
                        {post.createdAt
                            ? formalizeDate(post.createdAt)
                            : ""}
                    </span>
                </div>
            </div>

            <div className="post-card-author">
                <div className="post-card-profile"></div>
                <span>{post.author || "익명"}</span>
            </div>
        </article>
    );
};