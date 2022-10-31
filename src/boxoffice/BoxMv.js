import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import qs from "query-string";
import MvInfo from "./MvInfo";

export default function BoxMv() {
  const loc = useLocation().search;
  const mvcd = qs.parse(loc).mvcd;
  //state변수
  const [mv, setMv] = useState();

  //함수
  const getMovie = async (mvcd) => {
    let url =
      "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?";
    url = url + "key=" + "f5eef3421c602c6cb7ea224104795888";
    url = url + "&movieCd=" + mvcd;

    const resp = await fetch(url);
    const data = await resp.json();

    setMv(data);
  };

  //useEffect
  useEffect(() => {
    getMovie(mvcd);
  }, []);

  return (
    <>
      <ul>{mv && <MvInfo m={mv} />}</ul>
    </>
  );
}
