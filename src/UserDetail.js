import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUserDetailAsync } from "./action";

export default function UserDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailAsync());
  }, [])
  return (
    <div>
      UserDetail
    </div>
  )
}