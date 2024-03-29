function Footer() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const homepageData = await getHomepage();
  //     setData(homepageData);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="footer">
        {/* <div className="accent-container ">
          <div className="accent">
            <div className="text">{data.next_league}</div>
          </div>
        </div> */}
        <footer>
          <div className="baseline"></div>
          <div className="center-line"></div>

          <div className="questions">
            <h5>Any questions?</h5>
            <p>
              <a href="mailto:ladiesdoublesleague@gmail.com" target="_blank">
                Get in touch
              </a>{" "}
              with Sarah Mulligan, <br /> Co-ordinator of the Womens League.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
