import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import p5 from "p5";
import { Stack } from "@mui/material";

import ProjectPageTemplate from "../components/ProjectPageTemplate";
const P5Wrapper = dynamic(() => import("react-p5-wrapper"), { ssr: false });
import { sketch } from "../project-code/doublePendulum/sketch";

const DoublePendulumPage: NextPage = () => {
  const p5Sketch = (p5Instance: p5) => {
    sketch(p5Instance);
  };

  return (
    <ProjectPageTemplate title="double pendulum genetic learning simulation">
      <Stack direction="row" justifyContent="center">
        <div id="sketchHolder"></div>
        <div id="sliderHolder"></div>
        <P5Wrapper sketch={p5Sketch} />
      </Stack>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        neque arcu, ut vulputate justo pretium quis. Duis dignissim condimentum
        lobortis. Vestibulum nec lorem tincidunt lectus ornare eleifend eget ac
        nunc. Pellentesque nec nibh in leo cursus gravida. Aliquam tempus odio
        diam, eget eleifend dolor sollicitudin ut. Suspendisse malesuada sem eu
        leo fermentum, id lacinia erat porttitor. Aliquam arcu elit, bibendum id
        porta at, ullamcorper quis eros. Nullam pulvinar euismod augue, id
        egestas purus mattis rutrum. Praesent accumsan magna vel dictum
        venenatis. Vivamus elementum, est vel consequat vulputate, nisl dui
        sollicitudin nisl, eget consectetur orci nunc a eros. In purus lorem,
        mattis vitae tincidunt vel, mattis vitae elit. Vivamus faucibus ornare
        turpis, eget ullamcorper elit euismod a. Mauris a dolor ut massa
        ultrices lacinia. Vivamus sem sapien, ullamcorper vitae ornare eget,
        luctus in nibh. Duis imperdiet tortor ac elit sagittis elementum.
        Maecenas pretium odio sit amet ultrices sollicitudin. Phasellus
        scelerisque luctus hendrerit. Sed bibendum cursus sapien tincidunt
        finibus. Vivamus tempor maximus luctus. Ut ut ex posuere dolor facilisis
        fermentum vulputate nec lorem. Morbi sodales malesuada lectus id
        maximus. Quisque dignissim sed purus vitae ullamcorper. Aliquam urna
        orci, lacinia egestas efficitur vehicula, commodo ut orci. Nulla
        accumsan dolor at nibh malesuada, sed mattis ex tincidunt. Duis metus
        velit, luctus convallis est sed, porttitor bibendum libero. Phasellus
        nunc nisl, molestie at ante ut, tincidunt pellentesque ex. Fusce
        faucibus purus eu mollis scelerisque. Proin venenatis rhoncus mattis.
        Sed vulputate felis dolor, eu feugiat erat vehicula et. Vivamus nec
        finibus mi, nec lacinia leo. Fusce scelerisque gravida scelerisque.
        Suspendisse potenti. Praesent eu neque lectus. Maecenas ac leo a purus
        convallis vulputate. Etiam vitae ante erat. Proin id velit cursus,
        bibendum leo at, cursus turpis. Curabitur non orci massa. Praesent
        facilisis ante massa, sed elementum enim semper a. Morbi sed cursus
        metus. Maecenas lobortis justo et tellus interdum imperdiet. Sed in
        justo vel quam mollis faucibus id sit amet nunc. Phasellus venenatis
        neque in lobortis posuere. Aliquam vitae erat tristique nisi molestie
        maximus. Sed id accumsan risus. Sed posuere lectus dui, eu congue quam
        luctus sit amet. Aliquam fermentum eu sapien ultrices mattis. Aliquam
        lobortis nibh quam, at elementum nulla convallis et. Sed congue nibh a
        lobortis imperdiet. Mauris ipsum odio, ultricies malesuada lacinia a,
        maximus lobortis dolor. Nulla sodales hendrerit quam, id scelerisque est
        placerat a. Cras erat risus, aliquet a turpis eu, commodo porttitor
        erat. Proin vitae convallis odio, et consequat sem. Integer non justo in
        quam aliquam auctor. Curabitur ac sapien et nunc viverra sollicitudin
        sed vel purus. Pellentesque elementum felis ac sapien dictum, vitae
        elementum orci luctus. Proin tempor enim quis sapien tincidunt eleifend.
        Curabitur mattis elit in congue pellentesque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Morbi pulvinar neque et nisi pretium,
        ac elementum turpis convallis. Proin vitae sollicitudin sem, vitae
        faucibus felis. Quisque eros nisl, suscipit tristique sem id, dapibus
        pulvinar purus. Fusce nec purus erat. In sem enim, mollis vitae orci at,
        tristique placerat risus. Ut laoreet quis ligula sit amet finibus.
        Integer mattis augue et mauris dignissim placerat. Aliquam pulvinar
        molestie lectus, at accumsan nibh viverra vel. Pellentesque dolor eros,
        mattis ac fermentum eu, fermentum quis neque. Vestibulum aliquet id
        magna ut efficitur. Aliquam mattis a eros vitae volutpat. Ut porta
        feugiat gravida. Pellentesque ut magna lobortis, facilisis elit non,
        semper diam. Integer sed malesuada elit. Donec fermentum ligula magna,
        vitae maximus ligula lobortis quis. Morbi vulputate mattis leo ac
        molestie. Nunc nisl libero, aliquam sit amet tincidunt nec, consectetur
        quis diam. Fusce ornare lacus ac lobortis cursus. Sed non pharetra diam.
        Pellentesque pulvinar orci dolor, vel rhoncus sem tempor ut. Mauris non
        lectus tempus metus accumsan laoreet ac sit amet neque. Nam in enim
        odio. In eros turpis, dictum in ligula ut, bibendum placerat libero.
        Aenean porta luctus felis, in cursus mi ultricies vitae. Morbi luctus
        commodo lectus non sodales. Curabitur aliquet tempor turpis, non
        sollicitudin erat tempor vel. Nam vel risus ut erat semper sagittis a
        quis purus. Morbi eget dignissim sapien. Maecenas nec erat sit amet est
        aliquam porta nec euismod sem. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec sit amet viverra velit. Cras sed turpis eu metus
        efficitur convallis ac sed sapien. Sed lobortis posuere ultrices.
        Curabitur dictum nibh vitae iaculis mattis. Donec laoreet elementum est,
        ut efficitur risus tempus eget. Suspendisse potenti. Proin pretium
        semper congue. Aliquam eget diam a nisi porta fermentum. Nam sit amet
        quam tincidunt, elementum augue eget, suscipit mauris. Morbi id tortor
        condimentum, luctus augue eu, iaculis orci. Morbi sed tincidunt quam.
        Nulla sit amet nisi non turpis gravida blandit ut ut nulla. Duis in
        sollicitudin purus, sed facilisis velit. Sed eget volutpat lacus, vitae
        finibus nibh. Donec eget tristique eros, eu efficitur lectus. Curabitur
        vehicula malesuada leo imperdiet iaculis. Donec bibendum aliquet eros,
        in accumsan mauris blandit sed. Donec vitae dolor neque. Suspendisse
        pulvinar ligula metus, eget eleifend lectus euismod vitae. Nullam a
        tellus arcu. Aenean sodales lectus interdum suscipit vehicula. Aliquam
        tincidunt nec ex ut rhoncus. Sed eu blandit justo. Nulla pellentesque
        tellus nec sem eleifend rhoncus. Nullam pharetra arcu id odio mollis,
        eget mollis arcu interdum. Aenean vehicula aliquam lectus ac pulvinar.
        Vestibulum est justo, egestas non porttitor quis, posuere eu orci. Nulla
        ac libero lobortis, luctus massa eget, bibendum tellus. Morbi convallis
        ligula eu dignissim ultricies. Mauris lobortis, arcu porta laoreet
        suscipit, diam lacus consequat augue, ac eleifend ipsum turpis id massa.
        Donec malesuada consequat turpis non pulvinar. Ut vehicula hendrerit
        est. Mauris aliquam ante eget est ornare, ut bibendum enim ullamcorper.
        Nulla ex erat, imperdiet ut tellus nec, aliquam mattis mauris.
      </p>
    </ProjectPageTemplate>
  );
};

export default DoublePendulumPage;
