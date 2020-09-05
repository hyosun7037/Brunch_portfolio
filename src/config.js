// 데이터 저장
export const POSTS_URL = "http://192.168.0.101:8080/brunch/post/save";

// 댓글 저장 (+postId 붙이기)
export const COMMENTSAVE_URL =
  "http://192.168.0.101:8080/brunch/post/commentSave";

// 댓글 뿌리기 (+postId 붙이기)
export const COMMENT_URL = "http://192.168.0.101:8080/brunch/post/comment";

// 메인 포스트 영역
export const POSTLIST_URL = "http://192.168.0.101:8080/brunch/post/main";

// 작가 리스트
export const USER_URL = "http://192.168.0.101:8080/brunch/user/list";

// nav, userProfile
export const USERPROFILE_URL = "http://192.168.0.61:8080/brunch/user/loginUser";

// 프로필 편집
export const USERPROFILE_UPDATE_URL =
  "http://192.168.0.101:8080/brunch/user/profileEdit";

export const VIEWPOSTS_URL = "http://192.168.0.101:8080/brunch/posts";

// 태그
export const VIEWTAG_URL = "http://192.168.0.101:8080/brunch/tags";

// 작가의 서랍 리스트
export const DRAWER_URL = "http://192.168.0.101:8080/brunch/post/writer";

// 관리자
export const ADMIN_URL = "http://192.168.0.61:8080/brunch/admin";
