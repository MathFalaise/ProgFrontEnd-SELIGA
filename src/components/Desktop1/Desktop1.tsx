import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Rectangle2Icon } from './Rectangle2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.footer}>
        <div className={classes.rectangle2}>
          <Rectangle2Icon className={classes.icon} />
        </div>
        <div className={classes.todosDireitosReservados}>Todos direitos reservados®</div>
        <div className={classes.logoFacebookNoir1}></div>
        <div className={classes.luna_MakeUp}>Luna_MakeUp</div>
        <div className={classes._7dbd0b51c20a695901a84c4c083500}></div>
        <div className={classes.luna_MakeUp2}>Luna_MakeUp</div>
        <div className={classes.image1}></div>
        <div className={classes._4230537775}>42 3053 7775</div>
      </div>
      <div className={classes.header}>
        <div className={classes.rectangle1}></div>
        <div className={classes.ellipse1}>
          <Ellipse1Icon className={classes.icon2} />
        </div>
        <div className={classes.luna}>Luna</div>
        <div className={classes.makeUp}>MakeUp</div>
      </div>
      <div className={classes.conteudo}>
        <div className={classes.item1}>
          <div className={classes.rectangle4}></div>
          <div className={classes.batomMatte38g}>Batom Matte 3,8g</div>
          <div className={classes.r2190}>R$ 21,90</div>
          <div className={classes.rectangle5}></div>
          <div className={classes.cOMPRAR}>COMPRAR</div>
        </div>
        <div className={classes.item2}>
          <div className={classes.rectangle42}></div>
          <div className={classes.mascaraParaCilios6g}>Máscara para Cílios 6g</div>
          <div className={classes.r4990}>R$ 49,90</div>
          <div className={classes.rectangle52}></div>
          <div className={classes.cOMPRAR2}>COMPRAR</div>
        </div>
        <div className={classes.item3}>
          <div className={classes.rectangle43}></div>
          <div className={classes.baseOilFreeFPS30}>Base Oil Free FPS 30</div>
          <div className={classes.r19990}>R$ 199,90</div>
          <div className={classes.rectangle53}></div>
          <div className={classes.cOMPRAR3}>COMPRAR</div>
        </div>
        <div className={classes.item4}>
          <div className={classes.rectangle44}></div>
          <div className={classes.blushComAltaPigmentacao}>Blush com alta pigmentação</div>
          <div className={classes.r2890}>R$ 28,90</div>
          <div className={classes.rectangle54}></div>
          <div className={classes.cOMPRAR4}>COMPRAR</div>
        </div>
        <div className={classes.item5}>
          <div className={classes.rectangle45}></div>
          <div className={classes.esponjaParaMaquiagem}>Esponja para Maquiagem</div>
          <div className={classes.r1490}>R$ 14,90</div>
          <div className={classes.rectangle55}></div>
          <div className={classes.cOMPRAR5}>COMPRAR</div>
        </div>
        <div className={classes.item6}>
          <div className={classes.rectangle46}></div>
          <div className={classes.paletaDeSombras3g}>Paleta de Sombras 3g</div>
          <div className={classes.r3499}>R$ 34,99</div>
          <div className={classes.rectangle56}></div>
          <div className={classes.cOMPRAR6}>COMPRAR</div>
        </div>
        <div className={classes.item7}>
          <div className={classes.rectangle47}></div>
          <div className={classes.cremeFacialHidratante100g}>Creme Facial Hidratante 100g</div>
          <div className={classes.r2511}>R$ 25,11</div>
          <div className={classes.rectangle57}></div>
          <div className={classes.cOMPRAR7}>COMPRAR</div>
        </div>
        <div className={classes.item8}>
          <div className={classes.rectangle48}></div>
          <div className={classes.protetorSolarFPS50}>Protetor Solar FPS 50</div>
          <div className={classes.r5390}>R$ 53,90</div>
          <div className={classes.rectangle58}></div>
          <div className={classes.cOMPRAR8}>COMPRAR</div>
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.rectangle3}></div>
        <div className={classes.home}>Home</div>
        <div className={classes.produtos}>Produtos</div>
        <div className={classes.ajuda}>Ajuda</div>
      </div>
    </div>
  );
});
