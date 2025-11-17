import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const tabs = [
  { id: '1', title: 'Tab 1', content: 'Some text 1' },
  { id: '2', title: 'Tab 2', content: 'Some text 2' },
  { id: '3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabId || !activeTab ? (
          <div>Please select a tab</div>
        ) : (
          <div>{activeTab.content}</div>
        )}
      </div>
    </>
  );
};

export default Tabs;
