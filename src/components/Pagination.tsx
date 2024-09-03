// import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import clsx from "clsx";

type Props = {
  page: number;
  onChangePage: (page: number) => void;
  totalPages: number;
};

export default function Pagination({ page, onChangePage, totalPages }: Props) {
  // const router = useRouter();

  // useEffect(() => {
  //   const currentPage =
  //     router.query.page || router.asPath.split("?")?.[1]?.replace("page=", "");
  //   if (currentPage) {
  //     onChangePage(+currentPage);
  //   }
  // }, [router]);

  const handlePageClick = (evt: { selected: number }) => {
    onChangePage(evt.selected + 1);
    // router.push(router.pathname, {
    //   query: {
    //     page: evt.selected + 1,
    //   },
    // });
  };

  return (
    <ReactPaginate
      breakLabel={
        <span className="fc h-[30px] w-[30px] bg-zinc-400 text-white rounded cursor-pointer hover:opacity-80">
          ...
        </span>
      }
      nextLabel={
        <i className="text-lg text-blue-400 rounded cursor-pointer hover:opacity-80 ri-arrow-right-s-line"></i>
      }
      onPageChange={handlePageClick}
      activeClassName="bg-blue-400 text-white"
      pageRangeDisplayed={1}
      forcePage={page - 1}
      pageCount={totalPages}
      previousClassName="fc h-[30px] w-[30px] cursor-pointer hover:opacity-80"
      nextClassName="fc h-[30px] w-[30px] cursor-pointer hover:opacity-80"
      previousLabel={
        <i className="text-lg rounded text-blue-400 cursor-pointer hover:opacity-80 ri-arrow-left-s-line"></i>
      }
      renderOnZeroPageCount={null}
      pageLinkClassName="w-full h-full fc"
      containerClassName="flex gap-x-2 item-center text-xs"
      previousLinkClassName="w-full h-full fc"
      nextLinkClassName="w-full h-full fc"
      pageClassName={clsx(
        "fc h-[30px] w-[30px] border border-primary text-primary rounded cursor-pointer hover:opacity-80"
      )}
    />
  );
}
