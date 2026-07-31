import { useNavigate } from "react-router-dom";
import { formalizeDate } from "../../../module/module";

const defaultCategory = "카테고리";

export const PostItem = ({ post }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/post/${post.id}`);
    }

    return (
        <article className="post-card" onClick={handleClick} post={post}>
            <div
                className="post-card-image"
                style={{
                    backgroundImage: `url("${post.file}")`,
                }}
            />

            <div className="post-card-main">
                <h3 className="post-card-title">
                    {post.title }
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