import { makeAutoObservable, runInAction } from "mobx"
import { getPosts, PropsPosts} from '../api/getPosts'

class PostsStore {
    posts: PropsPosts[] = []
    isLoading = false

    constructor(){
        makeAutoObservable(this)
    }

    getPostsAction = async() => {
        try {
            this.isLoading = true
            const res = await getPosts()

            runInAction(()=> {
                this.posts = res
                this.isLoading = false
            })
        } catch {
            this.isLoading = false
        }
    }
}

export default new PostsStore()