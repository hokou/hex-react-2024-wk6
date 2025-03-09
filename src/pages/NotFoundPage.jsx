import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <>
      <div>404 找不到頁面，此路由不存在</div>
      <Link to="/">回到首頁</Link>
    </>
  )
}
