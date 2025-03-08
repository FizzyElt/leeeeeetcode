let product_except_self nums =
  let left_products =
    nums |> List.fold_left (fun acc x -> (List.hd acc * x) :: acc) [ 1 ] |> List.tl
  in
  let rec product_right lp nums product acc =
    match lp, nums with
    | [], _ -> acc
    | _, [] -> acc
    | l :: lp, n :: nums -> product_right lp nums (n * product) ((l * product) :: acc)
  in
  product_right left_products (List.rev nums) 1 []
;;

let%test "product_except_self 1" = product_except_self [ 1; 2; 3; 4 ] = [ 24; 12; 8; 6 ]

let%test "product_except_self 2" =
  product_except_self [ -1; 1; 0; -3; 3 ] = [ 0; 0; 9; 0; 0 ]
;;
