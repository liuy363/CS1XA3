module Lab7 exposing (main)

import Browser
import Html exposing (..)
import Html.Events as Events
import Http
import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Html exposing (Html, button, div, text)



-- TODO adjust rootUrl as needed




-- rootUrl = "https://mac1xa3.ca/e/macid/"


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }



{- -------------------------------------------------------------------------------------------
   - Model
   --------------------------------------------------------------------------------------------
-}


type alias Model =
    { name : String
    , password : String
    , passwordAgain : String
    , post_response : String
    , error_response : String 
    }


type Msg
    = Name String
    | Password String
    | PasswordAgain String
    | PostResponse (Result Http.Error String) -- Http Post Response recieved
    | PostButton -- post button is pressed


init : () -> ( Model, Cmd Msg )
init _ =
    ( { name = ""
      , password = ""
      , passwordAgain = ""
      , post_response = ""
      , error_response = ""
      }
    , Cmd.none
    )


{- -------------------------------------------------------------------------------------------
   - Update
   -   Message      | Model Attribute Updated      | Command Used
   -   ----------------------------------------------------------
   -   GetResponse  | get_ressponse,error_response | none
   -   PostResponse | post_reponse,error_response  | none
   -   GetButton    | none                         | Http.get
   -   PostButton   | none                         | Http.post
   --------------------------------------------------------------------------------------------
-}


performPost : Cmd Msg
performPost =
    Http.post
        { url = "https://mac1xa3.ca/e/liuy363/lab7/"
        , body = Http.stringBody "application/x-www-form-urlencoded" "name=Name&age=Age"
        , expect = Http.expectString PostResponse
        }


update : Msg -> Model -> ( Model, Cmd Msg)
update msg model =
    case msg of
        Name name ->
            ({ model | name = name } , Cmd.none)

        Password password ->
            ({ model | password = password } , Cmd.none)

        PasswordAgain password ->
            ({ model | passwordAgain = password } , Cmd.none)

        PostResponse result ->
            case result of
                Ok val ->
                    ( { model | post_response = val, error_response = "" }, Cmd.none )

                Err error ->
                    ( handleError model error, Cmd.none )

       
        PostButton ->
            ( model, performPost )



{- -------------------------------------------------------------------------------------------
   - View
   -   Model Attributes Used:
   -        model.get_response
   -        model.post_response
   -        model.error_repsonse
   -   Messages Used:
   -        onClick GetButton
   -        onClick PostButton
   --------------------------------------------------------------------------------------------
-}


view : Model -> Html Msg
view model =
    div []
        [ div []
            [ viewInput "text" "Name" model.name Name
            , viewInput "password" "Password" model.password Password
            , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain
            , viewValidation model
            ]
        , div [] [ text "Click here to make a post"
        , button [ Events.onClick PostButton ] [ text "Perform Post" ]
            ]
        , div [] [ text model.post_response ]
        , div [] [ text model.error_response ]
        ]


viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []


viewValidation : Model -> Html msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "OK" ]
  else
    div [ style "color" "red" ] [ text "Passwords do not match!" ]




-- put error message in model.error_response (rendered in view)


handleError : Model -> Http.Error -> Model
handleError model error =
    case error of
        Http.BadUrl url ->
            { model | error_response = "bad url: " ++ url }

        Http.Timeout ->
            { model | error_response = "timeout" }

        Http.NetworkError ->
            { model | error_response = "network error" }

        Http.BadStatus i ->
            { model | error_response = "bad status " ++ String.fromInt i }

        Http.BadBody body ->
            { model | error_response = "bad body " ++ body }
