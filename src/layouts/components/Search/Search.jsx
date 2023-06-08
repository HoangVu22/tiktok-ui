import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import * as searchService from "~/services/searchService";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(searchValue, 700); //  khi user ngừng gõ 700ms mới gọi API

  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(debounceValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounceValue]);

  const handleClear = () => {
    setSearchvalue(""); // khi click btn xóa sẽ set lại cho value chuỗi rỗng (useState)
    setSearchResult([]); // khi xóa thì sẽ ẩn luôn modal Result
    inputRef.current.focus(); // và focus lại input (useRef)
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(" ")) {
      //khi bắt đầu search bằng dấu cách thì k cho search
      return;
    }

    setSearchvalue(e.target.value); // set lại value
  };

  return (
    // sử dụng div or span để giải quyết lỗi warning
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Account</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
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
            onChange={handleChange} // khi giá trị thay đổi thì set lại
            onFocus={() => setShowResult(true)} // khi focus vào input thì hiện Result
          />
  
          {/* Nếu có giá trị và không có loading thì hiện icon xóa */}
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
          {/* Nếu có loading thì toán tử && sẽ lấy icon này ra để hiện thị */}
          {loading && <i className={`bi bi-arrow-repeat ${cx("loading")}`}></i>}
  
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
