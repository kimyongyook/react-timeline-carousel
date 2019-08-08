import React, { Component } from 'react';
import CarouselTimeline from './CarouselTimeline'

let contents = [
  {
    mediaType: "image"
    ,mediaSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAABKVBMVEX////F+AD44wD/qAP/ayZ2+QD/Q03/nwD/WQD78I/33gC/9wD/pQD/+vL++9//aSL/vWP/s1n44jWo+3D/6+Xz/djq/btk+QD/0pj/s0X55zrN+Tr/Yg//tp3/gU9t+QC8/I+K+jrh+43/6+v/trj/3Nz/Ljz/AAj/Pkj/9/f/rK7/Fy3/NkL/kwD++dD/TFf/z9H/ACP/IjP/ho3/wML/XWb/iF3/29H/xXvu/cau/IH/YB/55Un99rr5/urB/ZtC9wD/SgD/d1H/2Kr66WX7//DR/rT/vqb/5cH88p3j/Jfa/r//5eX/a3H/mZz/ABj/oaT/WFv/VG//M03/dnv/lqH/l4v/CTb/i5T/S0P/eIr/hn7/1tz/Z3//dGr/trD/u8f/4tX/hpZpSpFTAAAD10lEQVR4nO3cW3PTRhiA4S20IsSYUjCQlp6oLCFZG2TLSk1bmkIp9IDkQxDUxG4c8v9/RFdr6ES2M5rKzbozvM8FMAyzn/LqtLpBCAAAAAAAAAAAAAAAAAAAgPfVl2W+7eX/rP7g08qu1fMVrj78rLLL+lBv3anuO/1DfH+3hPi8zNYPvlppZ/dKZbsP8kN5uH2hsu0f1Qo3a7UPqqrV9tUKPz36qoT4sMzHWw210rVLFyu78om6PK5er17jwnZ+edyqXkP1uKlWuHH7oxLkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykOO/z/H4fcqxVebxz2oh8WT3UmW7O/kKv2yv4b5aYL+2hjtP1QrPHt0uIb4o86v+X87FbzuVPdELiN8vV3ZfL7D/TWV/7OsVnn9dQgAAgP8vP3EKEt/sfHvD84taqXQLvDQ2OD7phwvzZdo0OL+o7XU8a4HshLap+a1BtGr+1NT8omkgFw8m51qGeoyDpRh6fuSYmV/kuCuPJu9hZH5zsHq85Zk6HwVZlI8OguVz1GkZGG9b+VwZWNapA5D6j8HYwPzFwwnyGuGwNRxJ6XqeK/OD0bePZ+Lx0czPhkyHkTVUz3NpeWq+TEf5AXjR+Y9fOpw8hzwQcdLz0u7Ri2EWpZaXhfp2aZ///NRVg6KX4tWfYhKM+1G6F2V7dlufj46B+QuG+uwc2K8PG11h9xPHn0xnf9V1jujd29ZunmH9y0dfiCpHI60fHSdJfFhvNfrCn+R/HZi4W4vGrs7hO/4sq78+FLEdnzjHvUhfHe9e/vG9M6y/O5HzHG+avp8JZ1qPjsXk3nTY0adjuPby/9bbq8Pvpp2TunsoJsNXL4Q4cgtXh++cYf3NYzjP8TSYitSfdWfe1J91prE+HRu4OuKOztEeRVHWU9eD35h0jp35vsg1sBPK9LOj+2ZwkByd2Hb/pJc2Ri9tfbNs4Nnhz39y/SRXv7gjtd9w5/syuWfgy2F+Hej3ieeGoat+l29ftFKe//gl/WBh8/OPgYnvFn90ak/sFfY+G7hX1FsjXLlHV1dwamR+e3DWrjjdyGdtIqNVRxOYuFVyrdXfTNFG9uiKkwZqO1rkRpmxcxPLQC7ND7LE1Pwl7fHo9EPDCvf6Jj8n/TgrzPfUfPMvlcIR2QWm71p/w/MBAAAAAAAAAAAAAACAzfkbL90C/CYehycAAAAASUVORK5CYII="
    , textSrc: "tes22"
  },
  {
    mediaType: "image"
    ,mediaSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmq73RTsNZgMTghrjZvXDMRO2IHiBkc_hGRGdDovfoHZy3gkP0"
    ,textSrc: "test"
  },
  {
    mediaType: "image"
    ,mediaSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAABKVBMVEX////F+AD44wD/qAP/ayZ2+QD/Q03/nwD/WQD78I/33gC/9wD/pQD/+vL++9//aSL/vWP/s1n44jWo+3D/6+Xz/djq/btk+QD/0pj/s0X55zrN+Tr/Yg//tp3/gU9t+QC8/I+K+jrh+43/6+v/trj/3Nz/Ljz/AAj/Pkj/9/f/rK7/Fy3/NkL/kwD++dD/TFf/z9H/ACP/IjP/ho3/wML/XWb/iF3/29H/xXvu/cau/IH/YB/55Un99rr5/urB/ZtC9wD/SgD/d1H/2Kr66WX7//DR/rT/vqb/5cH88p3j/Jfa/r//5eX/a3H/mZz/ABj/oaT/WFv/VG//M03/dnv/lqH/l4v/CTb/i5T/S0P/eIr/hn7/1tz/Z3//dGr/trD/u8f/4tX/hpZpSpFTAAAD10lEQVR4nO3cW3PTRhiA4S20IsSYUjCQlp6oLCFZG2TLSk1bmkIp9IDkQxDUxG4c8v9/RFdr6ES2M5rKzbozvM8FMAyzn/LqtLpBCAAAAAAAAAAAAAAAAAAAgPfVl2W+7eX/rP7g08qu1fMVrj78rLLL+lBv3anuO/1DfH+3hPi8zNYPvlppZ/dKZbsP8kN5uH2hsu0f1Qo3a7UPqqrV9tUKPz36qoT4sMzHWw210rVLFyu78om6PK5er17jwnZ+edyqXkP1uKlWuHH7oxLkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykIMc5CAHOchBDnKQgxzkIAc5yEEOcpCDHOQgBznIQQ5ykOO/z/H4fcqxVebxz2oh8WT3UmW7O/kKv2yv4b5aYL+2hjtP1QrPHt0uIb4o86v+X87FbzuVPdELiN8vV3ZfL7D/TWV/7OsVnn9dQgAAgP8vP3EKEt/sfHvD84taqXQLvDQ2OD7phwvzZdo0OL+o7XU8a4HshLap+a1BtGr+1NT8omkgFw8m51qGeoyDpRh6fuSYmV/kuCuPJu9hZH5zsHq85Zk6HwVZlI8OguVz1GkZGG9b+VwZWNapA5D6j8HYwPzFwwnyGuGwNRxJ6XqeK/OD0bePZ+Lx0czPhkyHkTVUz3NpeWq+TEf5AXjR+Y9fOpw8hzwQcdLz0u7Ri2EWpZaXhfp2aZ///NRVg6KX4tWfYhKM+1G6F2V7dlufj46B+QuG+uwc2K8PG11h9xPHn0xnf9V1jujd29ZunmH9y0dfiCpHI60fHSdJfFhvNfrCn+R/HZi4W4vGrs7hO/4sq78+FLEdnzjHvUhfHe9e/vG9M6y/O5HzHG+avp8JZ1qPjsXk3nTY0adjuPby/9bbq8Pvpp2TunsoJsNXL4Q4cgtXh++cYf3NYzjP8TSYitSfdWfe1J91prE+HRu4OuKOztEeRVHWU9eD35h0jp35vsg1sBPK9LOj+2ZwkByd2Hb/pJc2Ri9tfbNs4Nnhz39y/SRXv7gjtd9w5/syuWfgy2F+Hej3ieeGoat+l29ftFKe//gl/WBh8/OPgYnvFn90ak/sFfY+G7hX1FsjXLlHV1dwamR+e3DWrjjdyGdtIqNVRxOYuFVyrdXfTNFG9uiKkwZqO1rkRpmxcxPLQC7ND7LE1Pwl7fHo9EPDCvf6Jj8n/TgrzPfUfPMvlcIR2QWm71p/w/MBAAAAAAAAAAAAAACAzfkbL90C/CYehycAAAAASUVORK5CYII="
    , textSrc: "tes22"
  },
  {
    mediaType: "video"
    ,mediaSrc: "http://techslides.com/demos/sample-videos/small.mp4"
    ,textSrc: "test"
  },
]
class App extends Component {
  render() {
    return (
      <CarouselTimeline data={contents} />
    );
  }
}

export default App;