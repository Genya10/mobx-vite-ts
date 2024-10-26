import { makeAutoObservable, runInAction } from "mobx"
import { getPosts, PropsPosts} from '../api/getPosts'
import { fromPromise, IPromiseBasedObservable } from "mobx-utils"

class PostsStore {
    posts?: IPromiseBasedObservable<PropsPosts[]>

    constructor(){
        makeAutoObservable(this)
    }

    getPostsAction = async() => {
     this.posts = fromPromise(getPosts())
    }
}

export default new PostsStore()