open Lib

let get_opt arr i =
  try
    let v = arr.(i) in
    Some v
  with
  | Invalid_argument _ -> None
;;

let max_ice_cream costs coins =
  Array.sort compare costs;

  let min = costs.(0) in

  let rec loop i curr =
    if curr < min
    then i
    else begin
      let c_opt = get_opt costs i |> Opt.filter (fun c -> c <= curr) in
      match c_opt with
      | None -> i
      | Some c -> loop (i + 1) (curr - c)
    end
  in
  loop 0 coins
;;

let%test "case 1" = max_ice_cream [| 1; 3; 2; 4; 1 |] 7 = 4

let%test "case 2" = max_ice_cream [| 10; 6; 8; 7; 7; 8 |] 5 = 0

let%test "case 3" = max_ice_cream [| 1; 6; 3; 1; 2; 5 |] 20 = 6
