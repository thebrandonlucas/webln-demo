import lightning from 'lightning'

export const { lnd } = lightning.authenticatedLndGrpc({
  cert: "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNKekNDQWN5Z0F3SUJBZ0lRZWM4Z0RWYVRkaDNxcS8xa0ZESHZYekFLQmdncWhrak9QUVFEQWpBeE1SOHcKSFFZRFZRUUtFeFpzYm1RZ1lYVjBiMmRsYm1WeVlYUmxaQ0JqWlhKME1RNHdEQVlEVlFRREV3VmhiR2xqWlRBZQpGdzB5TWpBMk1EVXhOVFU0TlRWYUZ3MHlNekEzTXpFeE5UVTROVFZhTURFeEh6QWRCZ05WQkFvVEZteHVaQ0JoCmRYUnZaMlZ1WlhKaGRHVmtJR05sY25ReERqQU1CZ05WQkFNVEJXRnNhV05sTUZrd0V3WUhLb1pJemowQ0FRWUkKS29aSXpqMERBUWNEUWdBRTNrRjBlZFhlc3FlTVV1TVRiUXJKK0hXRG9DcVYvVWgvOWcyallnd0pLOEN1YS9jOAoyK0FQTWR1WGVWNldvZk1rNHFpOGhqaGo3ZEc2Z1dIaGlMNDRGNk9CeFRDQndqQU9CZ05WSFE4QkFmOEVCQU1DCkFxUXdFd1lEVlIwbEJBd3dDZ1lJS3dZQkJRVUhBd0V3RHdZRFZSMFRBUUgvQkFVd0F3RUIvekFkQmdOVkhRNEUKRmdRVU42TEljNTRNNm92ZjlIb3JvcmVTY0VpL2NoVXdhd1lEVlIwUkJHUXdZb0lGWVd4cFkyV0NDV3h2WTJGcwphRzl6ZElJRllXeHBZMldDRG5CdmJHRnlMVzR4TFdGc2FXTmxnZ1IxYm1sNGdncDFibWw0Y0dGamEyVjBnZ2RpCmRXWmpiMjV1aHdSL0FBQUJoeEFBQUFBQUFBQUFBQUFBQUFBQUFBQUJod1NzRkFBQ01Bb0dDQ3FHU000OUJBTUMKQTBrQU1FWUNJUURGTktRS0pnTnByZTJ3MFhOWXV4QUNwRHh2eTVzb3d1akIybDdLMWZRcllBSWhBT2EzWFVJZApPNHlEUFc3d0dpM2ZLWGYvTzZBRGRXZ0ZlNUo4UFEreGtBc0wKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
  macaroon: "AgEDbG5kAvgBAwoQqXIgbLfXmwFWZabsWqOr+BIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaIQoIbWFjYXJvb24SCGdlbmVyYXRlEgRyZWFkEgV3cml0ZRoWCgdtZXNzYWdlEgRyZWFkEgV3cml0ZRoXCghvZmZjaGFpbhIEcmVhZBIFd3JpdGUaFgoHb25jaGFpbhIEcmVhZBIFd3JpdGUaFAoFcGVlcnMSBHJlYWQSBXdyaXRlGhgKBnNpZ25lchIIZ2VuZXJhdGUSBHJlYWQAAAYg+WI1CtN0YcAyLFbtD+Y2bZVIaYPzAtDERV3+6bolCUo=",
  socket: "127.0.0.1:10001",
});

lightning.getIdentity({ lnd }, (error, result) => {
  console.log(error);
  console.log(result);
});

// const app = express();

// app.use(cookieParser());
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", async (req, res) => {
//   const invoice = await lnService.createInvoice({
//     lnd,
//     tokens: 10,
//     description: "bolt.fun rocks",
//   });

//   console.log(invoice);
//   res.cookie("_ln_id", invoice.id);
//   res.render("index", { invoice });
// });

// app.get("/authenticated", async (req, res) => {
//   console.log(req.cookies);
//   const id = req.cookies._ln_id;
//   console.log(id);
//   const invoice = await lnService.getInvoice({
//     lnd,
//     id,
//   });

//   if (invoice.is_confirmed) {
//     res.render("success");
//   } else {
//     res.redirect("/");
//   }
// });

// const port = process.env.PORT || 3030;
// console.log(`Running on ${port}`);
// app.listen(port);
