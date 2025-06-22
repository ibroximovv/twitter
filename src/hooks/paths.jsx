import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons"
import { Bookmarks, Explore, Home, Lists, Messages, More, Notification, Profile } from "../pages"

export const paths = {
    home: '/',
    login: '/',
    explore: '/explore',
    notification: '/notification',
    lists: '/lists',
    profile: '/profile',
    more: '/more',
    messages: '/messages',
    bookmarks: '/bookmarks'
}

export const NavList = [
    {
        id: 1,
        title: 'Home',
        path: paths.home,
        element: <Home />,
        icon: <HomeIcon />
    },
    {
        id: 2,
        title: 'Explore',
        path: paths.explore,
        element: <Explore />,
        icon: <ExploreIcon />
    },
    {
        id: 3,
        title: 'Notification',
        path: paths.notification,
        element: <Notification />,
        icon: <NotificationIcon />
    },
    {
        id: 4,
        title: 'Messages',
        path: paths.messages,
        element: <Messages />,
        icon: <MessagesIcon />
    },
    {
        id: 5,
        title: 'Booksmarks',
        path: paths.bookmarks,
        element: <Bookmarks />,
        icon: <BookmarksIcon />
    },
    {
        id: 6,
        title: 'Lists',
        path: paths.lists,
        element: <Lists />,
        icon: <ListsIcon />
    },
    {
        id: 7,
        title: 'Profile',
        path: paths.profile,
        element: <Profile />,
        icon: <ProfileIcon />
    },
    {
        id: 8,
        title: 'More',
        path: paths.more,
        element: <More />,
        icon: <MoreIcon />
    }
]

export const SideList = [
    {
        id: 1,
        title: 'Trends for you',
        // path: 
    }
]