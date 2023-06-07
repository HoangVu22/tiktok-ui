import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchvalue(""); // khi click btn xóa sẽ set lại cho value chuỗi rỗng (useState)
    setSearchResult([]); // khi xóa thì sẽ ẩn luôn modal Result
    inputRef.current.focus(); // và focus lại input (useRef)
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Account</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult} // Khi click ra ngoài tippy thì ẩn cái Result
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchvalue(e.target.value)}
          onFocus={() => setShowResult(true)} // khi focus vào input thì hiện Result
        />

        {/* khi có giá trị thì hiện icon xóa */}
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <i className="bi bi-x-circle-fill"></i>
          </button>
        )}
        {/* <i className={`bi bi-arrow-repeat ${cx('loading')}`}></i> */}

        <button className={cx("search-btn")}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
