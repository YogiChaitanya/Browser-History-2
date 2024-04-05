import {Component} from 'react'
import Item from '../Item'
import './index.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {
    searchInput: '',
    listOfHistory: initialHistoryList,
  }

  onChangeUpdatevalue = event => {
    this.setState({searchInput: event.target.value})
  }

  // doubt1 how to create delete functionality
  deleteBtn = id => {
    const {listOfHistory} = this.state
    const updatedList = listOfHistory.filter(eachItem => eachItem.id !== id)
    this.setState({
      listOfHistory: updatedList,
    })
  }

  render() {
    const {searchInput, listOfHistory} = this.state

    // doubt2 i dont know what is the mistake in this code
    // error
    // When a non-empty value is provided in the search input element, and no history item includes the value given in the search input, then the page should consist of an HTML paragraph element with text content as "There is no history to show"
    const searchResults = listOfHistory.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const browserStatus = searchResults.length === 0
    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-box1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-img"
              alt="search img"
            />

            <input
              type="search"
              placeholder="Search history"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeUpdatevalue}
            />
          </div>
        </nav>

        <div className="card-container">
          {browserStatus ? (
            <div className="empty-container">
              <p className="empty-pagragraph">There is no history to show</p>
            </div>
          ) : (
            <ul className="browsing-items-container">
              {searchResults.map(eachItem => (
                <Item
                  key={eachItem.id}
                  browserDetails={eachItem}
                  deleteBtn={this.deleteBtn}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default History
