import GithubLogo from '@/components/icons/GithubIcon'
import LocationIcon from './icons/LocationIcon'
import LinkIcon from './icons/LinkIcon'
import TwitterIcon from './icons/TwitterIcon'
import BuildingIcon from './icons/BuildingIcon'
import { User } from '@/interfaces/user'
import Image from 'next/image'

interface Props {
    user: User;
}

function valideURL(url: string) {
    // Verificar si la URL comienza con "http://" o "https://"
    if (!/^https?:\/\//i.test(url)) {
      // Agregar "https://" al principio de la URL
      url = "https://" + url;
    }
    return url;
  }

const UserCardInfo = ({ user } : Props) => {
  return (
    <article className="p-4 rounded-xl dark:bg-[#1F2A48] dark:text-white grid-areas bg-[#F5F9FF] shadow-md dark:shadow-none">
        <div className='grid w-24 h-24 p-1 mr-3 overflow-hidden bg-gray-200 rounded-full section-logo place-content-center lg:mx-auto'>
            <Image 
                src={user.avatar_url} 
                width={96} 
                height={96} 
                alt={`Profile img ${user.name}`}
                className='rounded-full'
            />
            {/* <GithubLogo className='relative w-full h-full top-2'/> */}
        </div>
        <div className='section-title'>
            <h2 className='text-3xl font-bold'>{user.name}</h2>
            <p className='text-[#0078FB] '>@{user.login}</p>
        </div>
        <p className='lg:text-right section-date'>{new Date(user.created_at || "").toLocaleDateString("es", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })}</p>
        <p className='mt-8 leading-loose section-description'>{user.bio || "Bio no disponible"}</p>
        <div className='mt-4 flex justify-around section-number dark:bg-[#141C2F] rounded-xl p-8 text-center bg-[#ebeef7] '>
            <article>
                <p>Repos</p>
                <p className='text-xl font-bold'>{ user.public_repos }</p>
            </article>
            <article>
                <p>Followers</p>
                <p className='text-xl font-bold'>{ user.followers }</p>
            </article>
            <article>
                <p>Following</p>
                <p className='text-xl font-bold'>{ user.following }</p>
            </article>
        </div>
        <div className='mt-4 space-y-3 md:grid-cols-2 section-social md:grid'>
            <article className='flex space-x-2'>
                <i>
                    <LocationIcon 
                        className='w-full h-full dark:fill-white fill-[#506284]'
                        width={"1rem"}
                    />
                </i>
                <span>{ user.location }</span>
            </article >
            <article className='flex space-x-2'>
                <i>
                    <LinkIcon 
                        className='w-full h-full dark:fill-white fill-[#506284]'
                        width={"1rem"}
                    />
                </i>
                <a href={valideURL(user?.blog)} target='_blank' className='truncate'>{ user?.blog || "No disponible" }</a>
            </article>
            <article className='flex space-x-2'>
                <i>
                    <TwitterIcon 
                        className='w-full h-full dark:fill-white fill-[#506284]'
                        width={"1rem"}
                    />
                </i>
                <a href={`https://twitter.com/${user?.twitter_username}`} target='_blank'>{ user?.twitter_username || "No disponible" }</a>
            </article>
            <article className='flex space-x-2'>
                <i>
                    <BuildingIcon 
                        className='w-full h-full dark:fill-white fill-[#506284]'
                        width={"1rem"}
                    />
                </i>
                <span>{ user?.company || "No disponible" }</span>
            </article>
        </div>
    </article>
  )
}
export default UserCardInfo