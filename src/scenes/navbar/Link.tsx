import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/types";

// you add the type of the props to this part
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    //Overall, this code snippet is taking a string value page and converting it to a lower case string with all spaces removed, and then casting it to a specific custom type SelectedPage - ChatGPT
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage} ? "text-primary-500" : "" `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
        {page}
      </AnchorLink>
  )
}

export default Link;