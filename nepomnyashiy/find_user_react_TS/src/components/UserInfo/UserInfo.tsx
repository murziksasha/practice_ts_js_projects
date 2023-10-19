import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg';
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from 'assets/icon-website.svg';

import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

interface UserInfoProps extends Pick<LocalGithubUser,
'blog' | 'company' | 'twitter' | 'location'
> { }

export const UserInfo = ({blog, company, twitter, location }: UserInfoProps) => {
   const items: InfoItemProps[] = [
    {
      icon: <LocationIcon/>,
      text: location,
    },
    {
      icon: <WebsiteIcon/>,
      text: blog
    },
    {
      icon: <CompanyIcon/>,
      text: company
    },
    {
      icon: <TwitterIcon/>,
      text: twitter
    }
   ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, i) => (
        <InfoItem {...item} key={i}/>
      ))}
    </div>
  );
}
