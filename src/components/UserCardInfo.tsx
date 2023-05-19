import GithubLogo from '@/components/icons/GithubIcon'
const UserCardInfo = () => {
  return (
    <article className="p-2 rounded-xl bg-[#1F2A48] text-white">
        <div className='grid w-20 h-20 p-1 bg-gray-200 rounded-full place-content-center'>
            <GithubLogo className='relative w-full h-full top-2'/>
        </div>
        <div>
            <h2>The Octocat</h2>
            <p>@octocat</p>
        </div>
        <p>Joined 25 Jan 2011</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at, deserunt maxime beatae omnis minus possimus aliquam quis quia officiis tempore exercitationem architecto veniam consectetur in? Tenetur culpa explicabo cum!</p>
        <div>
            <article>
                <p>Repos</p>
                <p>8</p>
            </article>
            <article>
                <p>Followers</p>
                <p>3938</p>
            </article>
            <article>
                <p>Following</p>
                <p>9</p>
            </article>
        </div>
        <div>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
        </div>
    </article>
  )
}
export default UserCardInfo