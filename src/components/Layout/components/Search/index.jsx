import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 700) //  khi user ngừng gõ 700ms mới gọi API

  const inputRef = useRef();

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true); // trước khi call API thì load true

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false); // sau khi call API thì load false
      })
      .catch(() => {
        setLoading(false); // trong tình huống lỗi như mất wf thì cũng false (dừng loading)
      });
  }, [debounce]);

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
          onChange={(e) => setSearchvalue(e.target.value)} // khi giá trị thay đổi thì set lại
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

        <button className={cx("search-btn")}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
