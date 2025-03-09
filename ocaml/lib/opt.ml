include Option

let filter f = function
  | Some x when f x -> Some x
  | _ -> None
;;
